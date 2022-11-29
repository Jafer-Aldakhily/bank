import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import { connect, useDispatch } from "react-redux";
import { Button, Dropdown, Label, TextInput, Modal } from "flowbite-react";
function Home(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [type, setType] = useState(null);

  const AddAccount = (e) => {
    e.preventDefault();

    const account = {
      id: props.count + 1,
      customerName: name,
      accountNumber: number,
      accountType: type,
    };

    dispatch({ type: "ADD_ACCOUNT", payload: account });
  };

  return (
    <div>
      <Header />
      <Button onClick={() => setShow(true)}>Toggle modal</Button>
      <Modal show={show} size="md" popup={true} onClose={() => setShow(false)}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Create an account
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="customerName" value="Customer Name" />
              </div>
              <TextInput
                name="customerName"
                placeholder="Enter your Name"
                required={true}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="accountNumber" value="Account Number" />
              </div>
              <TextInput
                id="accountNumber"
                placeholder="Enter your account number"
                required={true}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div>
              <Dropdown
                label="Account type"
                value={type}
                name="account_type"
                inline={true}
              >
                <Dropdown.Item onClick={() => setType("savings")}>
                  Savings
                </Dropdown.Item>
                <Dropdown.Item onClick={() => setType("Student accounts")}>
                  Student accounts
                </Dropdown.Item>
              </Dropdown>
            </div>
            <div className="w-full">
              <Button onClick={AddAccount}>Create Account</Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Main />
      <Footer />
    </div>
  );
}

const manageStateToProps = (state) => {
  return {
    accounts: state.accounts,
    count: state.numberOfAccounts,
  };
};

export default connect(manageStateToProps)(Home);
