# Solana Norse

A dark fantasy NFT collection created for the ThirdWeb Solana hackathon.

Solana Norse is a set of 12 limited edition NFTs currently on the Solana Devnet.

## Visit the site

https://master.d29ylm786b08xa.amplifyapp.com

<img src="/screens/home.png" width="500" alt="home page"/>

## Story

The story focuses on an end of the world clash between the forces of good and evil. Each NFT is character in the storyline that is currentl being written. The NFT collection acts as a preview and outline for some of the major characters in the story.

## Technical Challanges

Connecting through the phantom wallet appears to be a bit slow at times. To prevent the user from feeling that there is an error happening I made an auth page dedicated to wallet connection. The user gets the feeling that a process is happening and is rerouted to their collection when the connect is complete.

https://master.d29ylm786b08xa.amplifyapp.com/auth

There is no function yet on the Solana React Thirdweb sdk to get all the claimed NFTs in a collection. In order to make the collection page work, we loop through all the NFTs in the drop and find the connected wallet balance for each. If the balance is greater than 0, then we show the NFT.

RPC - The Thirdweb RPC seemed to be hitting requests limits. We are now using a dedicated RPC url provided by Alchemy.

## Pages

- Home - The Home page gives an intro to the story and acts as a synopsis for the world of Solana Norse.

<img src="/screens/characters.png" width="500" alt="characters"/>

- Auth - Dedicated page for wallet connection.

<img src="/screens/auth.png" width="500" alt="auth page"/>

- Browse - This is where all NFTs in the collection are displayed and can be minted.

<img src="/screens/browse.png" width="500" alt="browse page"/>

- Collection - This page can only be accessed through a connect wallet. It shows the NFTs the connected wallet has claimed on the collection.

<img src="/screens/collection.png" width="500" alt="collection page"/>

### Development

The project is built with NextJS and the ThirdWeb SDK. Currently the only backend for the site is the Solana blockchain. The rest of the site operates via the client frontend framework.
https://nextjs.org/

Art comes from MidJourney and is produced via artifical intelligence.
https://www.midjourney.com/home/

Background video comes from pexels free stock video site.
https://www.pexels.com/search/videos/storm%20ocean%20/

After comparing hosting, I found that the best speed for such a project was achieved on AWS amplfiy hosting.
https://aws.amazon.com/amplify/

RPC - This project uses a dedicated RPC url from Alchemy.
https://www.alchemy.com/
