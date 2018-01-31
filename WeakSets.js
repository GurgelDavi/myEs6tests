const flavor1 = {flavor:'chocolate'};
const flavor2 = {flavor:'armpit'};
const uniqueFlavors = new WeakSet([flavor1,flavor2]);
uniqueFlavors.add(flavor1);
uniqueFlavors.add(flavor2);
uniqueFlavors.add(flavor1);
console.log(uniqueFlavors);
