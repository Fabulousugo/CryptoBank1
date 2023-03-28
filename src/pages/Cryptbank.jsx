import { ethers } from 'ethers';
import React from 'react';
import { useContract, useSigner } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants'

function Cryptbank() {
  
  const [depositInput, setDepositInput] = React.useState('')
  const [withdrawInput, setWithdrawInput] = React.useState('')
  const [balance, setBalance] = React.useState('')

  const [dLoading, setDloading] = React.useState(false)
  const [wLoading, setWloading] = React.useState(false)
 
  const { data: signer, isError, isLoading } = useSigner()
  const contract = useContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    signerOrProvider: signer,
  })

  async function depositMoney(e) {
    try {
      e.preventDefault();
      console.log('deposit funds', depositInput)

      setDloading(true)

      const tx = await contract.depositFunds({value: ethers.utils.parseEther(depositInput)});
      const hash = await tx.wait();
      console.log("🚀 ~ file: Form.jsx:220 ~ deposit ~ hash:", hash)

      setDepositInput('')
      getBalance()
      setDloading(false)
    } catch (error) {
      console.log("🚀 ~ file: Form.jsx:220 ~ deposit ~ error:", error)
    }

  }

  async function withdrawMoney(e) {
    try {
      e.preventDefault();
      alert('withdrawing funds.', withdrawInput)

      setWloading(true)

      const tx = await contract.withdrawFunds(ethers.utils.parseEther(withdrawInput.toString()));
      const hash = await tx.wait();
      console.log("🚀 deposit ~ hash:", hash)

      setWithdrawInput('')
      getBalance()
      setWloading(false)
    } catch (error) {
      alert("🚀 ~ file: Form.jsx:420 ~ withdraw ~ error:", error.data.message)
      
    }

  }

  async function getBalance() {
    try {
      alert('getting balance......')

      const bal = await contract.getBalance();

      setBalance(ethers.utils.formatEther(bal))
    } catch (error) {
      alert("🚀 ~ file: Form.jsx:66 ~ getBalance ~ error:", error)
      
    }

  }

  return (
    <div id='bank' style={{ display: 'flex', justifyContent: 'space-between', margin: '200px' }}>

      <div style={{ display: 'flex',flexDirection:'column', alignItems: 'center' }}>
        <form>
          <label style={{padding:'4px',}}>  </label>
          <input
          style={{padding:'10px',borderRadius:'20px',color:'blue'}} 
            type="text" 
            name="Amount" 
            placeholder='Withdrawal amount in ETH'
            
            value={withdrawInput}
            onChange={e=>setWithdrawInput(e.target.value)}
          />
          <button 
          style={{fontSize:'16px',borderRadius:'10px',backgroundColor:'red',borderColor:'blue',padding:'10px',marginLeft:'5px'}}
            onClick={(e) => withdrawMoney(e)}
            type="submit"
          >{wLoading ? 'Withdrawing...' : 'Withdraw'}</button>
        </form>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection:'row',justifyContent: 'center', alignItems: 'center' }}>
        <form>
          <label style={{padding:'10px',}}> </label>
          <input 
          style={{padding:'10px',borderRadius:'20px',color:'blue'}}
            type="text" 
            name="Amount" 
            placeholder='Deposit amount in ETH'
            value={depositInput}
            onChange={e=>setDepositInput(e.target.value)}
          />
          <button 
          style={{fontSize:'16px',borderRadius:'10px',backgroundColor:'blue',borderColor:'orange',padding:'10px'}}
            onClick={(e) => depositMoney(e)}
            type="submit"
          >{dLoading ? 'Depositing...' : 'Deposit'}</button>    
        </form>
      </div>

      <div style={{ display: 'flex',flexDirection:'column', alignItems: 'center' }}>
        <label style={{padding:'10px',fontSize:'16px'}}>Balance: {balance}ETH</label>
        <button
        style={{borderRadius:'10px',backgroundColor:'orange',borderColor:'green',fontSize:'16px',padding:'10px'}}
          onClick={()=>getBalance()}
        >Balance</button>
      </div>

    </div>
  );
}

export default Cryptbank;
