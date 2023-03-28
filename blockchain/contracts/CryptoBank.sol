// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract CryptoBank {
    // A mapping that associates an address with a balance of ether and a timestamp of their last deposit
    mapping(address => uint) balances;
    mapping(address => uint) lastDepositTimestamp;
    mapping(address => uint) withdrawalsToday; // added mapping to keep track of withdrawals made by each user today
    
    // An event that is emitted when a deposit is made, including the user's address and the amount deposited
    event Deposit(address indexed user, uint amount);
    
    // An event that is emitted when a withdrawal is made, including the user's address and the amount withdrawn
    event Withdrawal(address indexed user, uint amount);

    // A function that allows users to deposit ether into their account
    function deposit() public payable {
        // Require that the amount deposited is greater than or equal to 0.001 ether
        require(msg.value >= 0.001 ether, "Deposit amount must be greater than or equal to 0.001 ethers");

        // Update the user's balance and timestamp of their last deposit
        balances[msg.sender] += msg.value;
        lastDepositTimestamp[msg.sender] = block.timestamp;
        
        // Emit the Deposit event with the user's address and the amount deposited
        emit Deposit(msg.sender, msg.value);
    }

    // A function that allows users to withdraw ether from their account, with a limit of 4 withdrawals per day
    function withdraw(uint amount) public {
        // Require that the amount to withdraw is greater than zero
        require(amount > 0, "Amount must be greater than zero");
        
        // Require that the amount to withdraw does not exceed 90% of the user's available balance
        require(amount <= balances[msg.sender] * 9 / 10, "Cannot withdraw more than 90% of available balance");
        
        // Require that the user has sufficient balance to make the withdrawal
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        // Require that the user has not made more than 4 withdrawals in the current day
        require(withdrawalsToday[msg.sender] < 4, "Exceeded withdrawal limit");
        
        // Subtract the amount withdrawn from the user's balance
        balances[msg.sender] -= amount;
        
        // Transfer the withdrawn ether to the user's address
        (bool success, ) = payable(msg.sender).call{value: amount, gas: 2300}("");
        require(success, "Transfer failed.");
        
        // Update the number of withdrawals made by the user today
        withdrawalsToday[msg.sender]++;
        
        // Emit the Withdrawal event with the user's address and the amount withdrawn
        emit Withdrawal(msg.sender, amount);
    }

    // A function that returns the balance of the calling address
    function getBalance() public view returns (uint) {
        return balances[msg.sender];
    }
}
