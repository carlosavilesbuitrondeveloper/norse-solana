# Solana Norse

A dark fantasy NFT collection created for the ThirdWeb Solana hackathon.

Solana Norse is a set of 12 limited edition NFTs currently on the Solana Devnet.

## Visit the site

https://master.d29ylm786b08xa.amplifyapp.com/collection

## Story

The story focuses on an end of the world clash between the forces of good and evil. Each NFT is character in the storyline that is currentl being written. The NFT collection acts as a preview and outline for some of the major characters in the story.

## Technical Challanges

Connecting through the phantom wallet appears to be a bit slow at times. To prevent the user from feeling that there is an error happening I made an auth page dedicated to wallet connection. The user gets the feeling that a process is happening and is rerouted to their collection when the connect is complete.

There is function yet on the Solana React Thirdweb sdk to get all the claimed NFTs in a collection. In order to make the collection page work, we loop through all the NFTs in the drop and find the connected wallet balance for each.

## Pages

- Home - The Home page gives an intro to the story and acts as a synopsis for the world of Solana Norse.

- Browse - This is where all NFTs in the collection are displayed and can be minted.

- Collection - This page can only be accessed through a connect wallet. It shows the NFTs the connected wallet has claimed on the collection.

### Development

The project is built with NextJS and the ThirdWeb SDK. Currently the only backend for the site is the Solana blockchain. The rest of the site operates via the client frontend framework.
https://nextjs.org/

Art comes from MidJourney and is produced via artifical intelligence.
https://www.midjourney.com/home/

Background video comes from pexels free stock video site.
https://www.pexels.com/search/videos/storm%20ocean%20/

After comparing hosting, I found that the best speed for such a project was achieved on AWS amplfiy hosting.
https://aws.amazon.com/amplify/
