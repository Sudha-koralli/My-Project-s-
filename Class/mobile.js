class Mobile{
    phoneModel ="OnePlus"
    #unlockPIN = 4488// private variable
    makeCall(){
          console.log("calling someone...");
    }
    sendSMS(phoneNumber){
        console.log("sending..."+ phoneNumber);
  }
   get getUnlockPIN(){
        return this.#unlockPIN;//getter method to get the values
    }
    set unlockPin(value){
          this.#unlockPIN = value//setter method to set values
    }
}
const mymobile = new Mobile();
mymobile.sendSMS(66)
console.log(mymobile.phoneModel);
console.log(mymobile.getUnlockPIN);
mymobile.unlockPin = 8844
console.log(mymobile.getUnlockPIN);