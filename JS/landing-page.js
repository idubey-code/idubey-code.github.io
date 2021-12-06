
// Search function
function show_result()
{
  let stock = document.getElementById('search-value').value.toLowerCase();

  let stocks = [];

  var count = 0;

  for (let i=0; i<10; i++){
      stocks.push(document.getElementsByClassName("stock")[i].id);
  }

  for (var i = 0; i < stocks.length; i++)
  {
    if (stocks[i]!==stock) {
      document.getElementsByClassName("stock")[i].style.display = "none";
      count++;
    }
  }
  if (count===10)
  {
    document.getElementsByClassName("error")[0].style.display = "block";
    document.getElementsByClassName("show-all")[0].style.display = "block";
    document.getElementById('search-value').value='';
  }
}

// Show all function
function show_all()
{
  location.reload();
}

// Slider menu function
function show_menu()
{
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementsByClassName('logo-screen')[0].classList.toggle('active');
  document.getElementsByClassName('search-bar')[0].classList.toggle('active');
  document.getElementsByClassName('error')[0].classList.toggle('active');
  document.getElementsByClassName('show-all')[0].classList.toggle('active');
  document.getElementsByClassName('stocks-scroll')[0].classList.toggle('active');

  var status = document.getElementById('sidebar').classList.value;
  if (status === 'active')
  {
      document.getElementById('search-value').readOnly = true;
  }
  else
  {
    document.getElementById('search-value').readOnly = false;
  }
}
