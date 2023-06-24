pragma solidity >=0.8.0 <0.9.0;
//SPDX-License-Identifier: MIT

import "hardhat/console.sol";
// import "@openzeppelin/contracts/access/Ownable.sol"; 
// https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol

contract YourContract {

  //event SetPurpose(address sender, string purpose);

  //string public purpose = "Building Unstoppable Apps!!!";
  string public review = "Set a review";

  uint256 houseCount = 0;
  mapping(uint => houseReview) reviews;

  struct houseReview {
    string _houseID;
    string _review;
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
        houseCount += 1;
        reviews[houseCount] = houseReview(_houseID, _review);
    }

    function getReview(string memory _houseID) public view returns(string memory) {
      return _houseID;
    }

}
