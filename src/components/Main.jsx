import { connect, useDispatch } from "react-redux";
function Main(props) {
  // const accounts = useSelector(state => state.accounts)
  const dispatch = useDispatch();
  const deleteAccount = (e) => {
    const id = e.target.value;
    const accounts = props.accounts.filter((account) => account.id != id);
    dispatch({ type: "REMOVE_ACCOUNT", payload: accounts });
  };
  return (
    <div className="p-10">
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Id
              </th>
              <th scope="col" className="py-3 px-6">
                customerName
              </th>
              <th scope="col" className="py-3 px-6">
                accountNumber
              </th>
              <th scope="col" className="py-3 px-6">
                accountType
              </th>
              <th scope="col" className="py-3 px-6">
                action
              </th>
            </tr>
          </thead>
          <tbody>
            {props.accounts.map((account, index) => {
              return (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {account.id}
                  </th>
                  <td className="py-4 px-6">{account.customerName}</td>
                  <td className="py-4 px-6">{account.accountNumber}</td>
                  <td className="py-4 px-6">{account.accountType}</td>
                  <td className="py-4 px-6">
                    <button
                      className="bg-red-500 p-4 rounded-full text-white"
                      onClick={(e) => deleteAccount(e)}
                      value={account.id}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const manageStateToProps = (state) => {
  return {
    accounts: state.accounts,
  };
};

export default connect(manageStateToProps)(Main);
