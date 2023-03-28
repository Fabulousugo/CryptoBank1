import myImage from '../../images/bank3.jpg';

function Warning(){
    return(
            
      <div id='home'>
      <div  class="notification is-link">
        <button class="delete"></button>
        Please make sure your preferred wallet is connected, <strong>take your time also to read the rules of Engagement</strong>
      </div>

      <h2 class="title is-2" style={{paddingLeft:'30%', color:'purple'}}>Rules of Engagement</h2>
      <div class="tile is-ancestor">
      <div class="tile is-4 is-vertical is-parent">
        <div class="tile is-child box">
          <p class="title" style={{color:'purple'}}>One</p>
          <p>The withdraw function allows users to withdraw ether from their account</p>
        </div>
        <div class="tile is-child box">
          <p class="title" style={{color:'purple'}}>Three</p>
          <p>  The function subtracts the amount withdrawn from the your balance, transfers the ether to the your address, updates the number of withdrawals made by the your today, and emits a Withdrawal event.</p>
        </div>
      </div>
        <div class="tile is-child box">
          <p class="title" style={{color:'purple'}}>Two</p>
          <p>It requires that the amount to withdraw is greater than zero,<br/> does not exceed 90% of the your available balance(click the balance button to check balance),<br/> that you have sufficient balance,<br/> and that you have not made more than 4 withdrawals in the current day.</p>
        </div>
      
      
      <div class="tile is-parent">
        <div class="tile is-child box">
        <img src={myImage} alt="My Image" style={{ width: '100%', height: '100%' }} />

        </div>
      </div>
    </div>
    <div id='bank' class="notification is-link">
  <button class="delete"></button>
  <strong style={{padding:'20%'}}>This contract was deployed goerli Testnet. Once again welcome to our CRYPTOBANK!!</strong>
</div>
    </div>
    );
} 

export default Warning;