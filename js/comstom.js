document.getElementById('btn-submit').addEventListener('click', function(){
    // inputEmail
    const inputEmail = document.getElementById('user-email').value;
    const inputpass = document.getElementById('user-password').value;

    if(inputEmail === 'ap205811@gmail.com' && inputpass == 123){
        window.location.href='bank.html';
    }else{
        alert('Pleac right valu')
    }
    window
})