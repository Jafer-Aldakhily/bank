import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux/es/exports'
export default function Main() {
    const accounts = useSelector(state => state.accounts)
    const dispatch = useDispatch()
  return (
    <div className='p-10'>
      
<div class="overflow-x-auto relative">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Id
                </th>
                <th scope="col" class="py-3 px-6">
                customerName
                </th>
                <th scope="col" class="py-3 px-6">
                accountNumber
                </th>
                <th scope="col" class="py-3 px-6">
                accountType
                </th>
            </tr>
        </thead>
        <tbody>
            {
                accounts.map(account => {
                    return (
                        <>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {account.id}
                        </th>
                        <td class="py-4 px-6">
                             {account.customerName}
                        </td>
                        <td class="py-4 px-6">
                            {account.accountNumber}
                        </td>
                        <td class="py-4 px-6">
                            {account.accountType}
                        </td>
                        </tr>
                        </>
                    )
                })
            }
            
        </tbody>
    </table>
</div>

    </div>
  )
}

// const manageStateToProps = (state) => {
//     return {
//         ...state,
//        accounts :  state.accounts
//     }
// }

// connect(manageStateToProps)(Main)
