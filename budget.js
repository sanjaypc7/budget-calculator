addvalue=()=>{
    username=uname.value;
    income=uincome.value;
    rent=urent.value;
    food=ufood.value;
    insu=uinsu.value;
    bill=ubill.value;
    other=uother.value;

    userdetails={
        username,
        income,
        rent,
        food,
        insu,
        bill,
        other
    }
  if(username==''&& income==''){
    alert('please enter name and income')
  }
  else{
    total=parseInt(rent)+parseInt(food)+parseInt(insu)+parseInt(bill)+parseInt(other);
    console.log(total);
    balance=income-total;
    console.log(balance);
    bname.value=username;
    exp.value=total;
    bal.value=balance;

    
  }
}