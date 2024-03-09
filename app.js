
function order() {
  let getName = document.getElementById("input_name").value;
  let typeData = document.getElementById("type");
  let typeIndex = typeData.selectedIndex;
  let getType = typeData.options[typeIndex].value;
  
  let itemData = document.getElementById('item');
  let itemIndex = itemData.selectedIndex;
  let getItem = itemData.options[itemIndex].value;
  
  let getCount = document.getElementById('input_count').value;
  let num_getCount = parseInt(getCount);

    if (getName !== "") {
      if (getType === "none") {
        alert('カテゴリを選択してください');

      } else if (getItem === "none") {
        alert('アイテムを選択してください');

      } else if (getCount === "") {
        alert('数量を入力してください');

      } else if (num_getCount < 3) {
        alert('申し訳ありませんが最少注文数は3点です')

      } else if (num_getCount > 20) {
        alert('申し訳ありませんが最多注文数は20点です')

      } else {
        alert(getName +'様'+ '\nご利用いただきありがとうございます\n下記注文内容をご確認いただけます')
        
        document.getElementById("orderName").textContent = getName;
        document.getElementById("orderType").textContent = getType;
        document.getElementById('orderItem').textContent = getItem;
        document.getElementById('orderCount').textContent = getCount;
  
        if (getType === "メンズ") {
          let price = parseInt(getCount) * 1899
          document.getElementById('orderPrice').textContent = price + "円";
          alert("今だけお得！！今日メンズのアイテムご購入の方にネクタイをプレゼントいたします！");
        } else if (getType === "レディース") {
          let price = parseInt(getCount) * 1499
          document.getElementById('orderPrice').textContent = price + "円";
          alert("今だけお得！！今日レディースのアイテムご購入の方にスカーフをプレゼントいたします！");
        }
      }
  
    } else {
      alert('お名前を入力してください。');
      
    }
  
  }
  
  
function showMsg (){
  const msg = document.querySelector('.model');
  msg.style.display = 'block';
}  

function closeMsg (){
  const msg = document.querySelector('.model');
  msg.style.display = 'none';
}


  
  