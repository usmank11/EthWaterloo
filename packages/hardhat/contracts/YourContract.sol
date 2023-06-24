pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
// import "@openzeppelin/contracts/access/Ownable.sol"; 
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {

  //event SetPurpose(address sender, string purpose);

  //string public purpose = "Building Unstoppable Apps!!!";
  string public review = "Set a review";

  mapping(string => metaData) houses;

  struct metaData {
    string[] _reviews;
    bool doesExist;
  }

  // constructor() payable {
  //   // what should we do on deploy?
  // }

  // function setPurpose(string memory newPurpose) public payable {
  //     purpose = newPurpose;
  //     console.log(msg.sender,"set purpose to",purpose);
  //     emit SetPurpose(msg.sender, purpose);
  // }
    
    

    function addReview(string memory _houseID, string memory _review) public {
      houses[_houseID].doesExist = true;
      houses[_houseID]._reviews.push(_review);
    }

    function getReviews(string memory _houseID) public view returns(string[] memory) {
      if (houses[_houseID].doesExist){
        return houses[_houseID]._reviews;
      } else {
        string[] memory empty;
        return empty;
      }
      
    }

}
