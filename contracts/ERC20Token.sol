pragma solidity ^0.4.22;


contract ERC20Token {

  uint public totalSupply;
  string public name = "ERC Token";
  string public symbol= "ERC"; 
  string public standard = "ERC Dapp v1.0";
  mapping( address => uint ) public balanceOf;

  event Transfer(
    address indexed _from,
    address indexed _to,
    uint _value
  );

  event Approval();
  
  constructor(uint256 _initialSupply) public {

    balanceOf[msg.sender] = _initialSupply;

    totalSupply = _initialSupply;

  }

  function transfer(address _to, uint _value) public returns(bool success){

    require(balanceOf[msg.sender]>=_value,"not enough balance");
    balanceOf[msg.sender] -= _value;
    balanceOf[_to] += _value;
    emit Transfer(msg.sender,_to,_value);

    return true;
  }

  function approve(address _spender,uint _value) public returns(bool success) {
    
  }

  function transferFrom(address _from,address _to,uint _value) {
    
  }


}
