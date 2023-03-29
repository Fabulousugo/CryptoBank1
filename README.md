<div align="center">
    <img src="public/logo.gif" height="70" alt="Lenster Logo">
    <h1>CRYPTOBANK</h1>
    <strong align="center">Another way to bank </strong>
</div>
<strong>This is a simple application of the blockchain technology. with some basic functionalities:</strong>
<br> 

**One**

The withdraw function allows users to withdraw ether from their account
<br>


**two**


It requires that the amount to withdraw is greater than zero,
does not exceed 90% of the your available balance(click the balance button to check balance),
that you have sufficient balance,
and that you have not made more than 4 withdrawals in the current day.


<br>

**three**

The function subtracts the amount withdrawn from the your balance, transfers the ether to the your address, updates the number of withdrawals made by the your today, and emits a Withdrawal event.

<br>

<br>

# Please test with a goerli account.
HAVE FUN TESTING!! 
<br> <br>

<br>
<br>
<br>

# FrontEnd

This is a [wagmi](https://wagmi.sh) + [RainbowKit](https://rainbowkit.com) + [Vite](https://vitejs.dev/) project bootstrapped with [`create-wagmi`](https://github.com/wagmi-dev/wagmi/tree/main/packages/create-wagmi)

# Getting Started

Run `npm run dev` in your terminal, and then open [localhost:5173](http://localhost:5173) in your browser.

Once the webpage has loaded, changes made to files inside the `src/` directory (e.g. `src/App.tsx`) will automatically update the webpage.

# Learn more

To learn more about [Vite](https://vitejs.dev/), [RainbowKit](https://rainbowkit.com) or [wagmi](https://wagmi.sh), check out the following resources:

- [wagmi Documentation](https://wagmi.sh) – learn about wagmi Hooks and API.
- [wagmi Examples](https://wagmi.sh/examples/connect-wallet) – a suite of simple examples using wagmi.
- [RainbowKit Documentation](https://rainbowkit.com/docs/introduction) – learn more about RainbowKit (configuration, theming, advanced usage, etc).
- [Vite Documentation](https://vitejs.dev/) – learn about Vite features and API.


# Smart Contract

## 🔧 Technology Stack & Tools



- [Ethers](https://docs.ethers.io/)
<br/>

- [Hardhat](https://hardhat.org/)
<br/>

- [Remix](https://remix.ethereum.org/)

<br/>

- [MetaMask]() (User Authentication)

## **Project Website Link**

- https://cryptobank-k.netlify.app




## **Site Overview**

**Home Page**

![Screenshot (72)](https://user-images.githubusercontent.com/113071405/228496415-a54d5cab-6437-4f96-9870-83a4a517f94c.png)





<br/>

**Rainbow Wallet connect**

![Screenshot (73)](https://user-images.githubusercontent.com/113071405/228496477-17612f2a-9161-48a8-80e6-6c541f4bb029.png)

<br/>

**Rules of Engagement**

![Screenshot (74)](https://user-images.githubusercontent.com/113071405/228496564-af083560-d410-4cb1-b6a9-a2d6948e0b65.png)

<br/>
**Bank Section**

![Screenshot (75)](https://user-images.githubusercontent.com/113071405/228497272-9e712239-594a-4637-a806-7495f2ca71bf.png)

<br/>

![Screenshot (76)](https://user-images.githubusercontent.com/113071405/228497226-0a648493-5b51-4df6-82af-33ce43f48075.png)

<br>







## **Project Authors**

-Fabulousugo(https://github.com/fabulousugo)<br/>


## 🤝 Contribute
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are <strong>greatly appreciated</strong>. 😊
<p>
&emsp;1. Fork Project

</p>
<p>

&emsp;2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
</p>

<p>

&emsp;3. Commit your changes(`git commit -m "Add Some Amazing Feature" `)
</p>

<p>

&emsp;4. Push to the Branch (`git push origin feature/AmazingFeature`)
</p>

<p>
&emsp;5. Open a Pull Request

</p>






<br/>
<br/>
<br/>

**Implementation Details**

- The project makes use of abis from an already deployed contract, majority of the codes written were for the front-end, locate the src folder. It contains the main.ts, trace out the routes.<br/>








## **License**

MIT License

Copyright (c) [2023] [Fabulousugo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
