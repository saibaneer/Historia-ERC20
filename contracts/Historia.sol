// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Historia is ERC20, Pausable, Ownable {
  constructor(uint256 _initialSupply) ERC20("Historia", "EREN") Pausable() public {
    _mint(msg.sender, _initialSupply * (10 ** decimals()));    
  }

  function pause() public onlyOwner {
    _pause();
  }

  function unpauser() public onlyOwner {
    _unpause();
  }

  function _beforeTokenTransfer(address from, address to, uint256 amount) internal whenNotPaused override {
    super._beforeTokenTransfer(from, to, amount);
  }
}
