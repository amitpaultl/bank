document.getElementById('btn-deposit').addEventListener('click', function(){
    const newAmount = document.getElementById('deposit-field');
    const newValue = newAmount.value;
    const numberNewNumber = parseFloat(newValue);

    // let oldAmound = document.getElementById('withdraw-total').innerText;
    const oldAmound = document.getElementById('deposit-total');
    const oldamounttk = oldAmound.innerText
    const numberOldAmound = parseFloat(oldamounttk);
    
    const carenAmount = numberNewNumber + numberOldAmound;
    oldAmound.innerText = carenAmount;
    newAmount.value = ' ';

    const totalAmunt = document.getElementById('balance-total');
    const totalAmountText = totalAmunt.innerText;
    const totalAmountNumber = parseFloat(totalAmountText);

    const totalCarnNumber = totalAmountNumber + numberNewNumber;
    totalAmunt.innerText = totalCarnNumber;


})



    // secrnt number



    document.getElementById('btn-withdraw').addEventListener('click', function(){
        const withdrawAmount = document.getElementById('withdraw-field');
        const withdrawvalue = withdrawAmount.value;
        const withdrawNumber = parseFloat(withdrawvalue);


        const withdrawOld = document.getElementById('withdraw-total');
        const withdrawOldnmber = withdrawOld.innerText;
        const CrentWithdr = parseFloat(withdrawOldnmber);

        const totalAmountWitho = withdrawNumber + CrentWithdr;
        withdrawOld.innerText = totalAmountWitho;
        withdrawAmount.value = ' ';

        const totalAmunt = document.getElementById('balance-total');
        const totalAmountText = totalAmunt.innerText;
        const totalAmountNumber = parseFloat(totalAmountText);

        const totalAmountAll = totalAmountNumber - withdrawNumber;

        totalAmunt.innerText = totalAmountAll



    })