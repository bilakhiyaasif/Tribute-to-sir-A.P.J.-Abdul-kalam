alert("Tribute to Sir A.P.J. Abdul Kalam\n I am feeling proud to present Tribute for sir.");

function fn1()
{
    var id1=document.getElementById("id1");
    var i=0;
    var id=setInterval(frame,3000);
    var arr=['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBzxRvGgxVqzGcsMzhQOZqTRLQzSERZKQT92XxcrySE_pdNyTVg', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJMXbt6R7vircftgAptU1h-bQDZKQOVrNg8dxMTrRokIVHk_mDcKG-7C3Aig',    'http://www.kostalife.com/wp-content/uploads/2015/10/kalam12.jpg'];
    function frame()
    {
    if(i>2)
    {
        i=0;
    }
    id1.src=arr[i];
    i++;
    }
  
}
