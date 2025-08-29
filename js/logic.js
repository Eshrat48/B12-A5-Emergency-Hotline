document.addEventListener("DOMContentLoaded", function(){

  var heartCount = document.getElementById("heart-count")
  var coinCount = document.getElementById("coin-count")
  var historyList = document.querySelector(".history-list")
  var clearHistoryBtn = document.querySelector(".history-clear")
  var copyCountSpan = document.getElementById("copy-count")
  var copyCount = 0 

  // Heart Click
  var heartBtns = document.querySelectorAll(".card-fav")
  for(var i=0;i<heartBtns.length;i++){
    heartBtns[i].addEventListener("click", function(){
      var now = parseInt(heartCount.innerText)
      now = now + 1
      heartCount.innerText = now
    })
  }

  // Call Button
  var callBtns = document.querySelectorAll(".card-call")
  for(var j=0; j<callBtns.length; j++){
    callBtns[j].addEventListener("click", function(e){
      var card = e.target.closest(".hotline-card")
      var serviceName = card.querySelector(".card-title").innerText
      var serviceNumber = card.querySelector(".card-number").innerText

      var coinsNow = parseInt(coinCount.innerText)
      if(coinsNow < 20){
        alert("No Coins. Sorry :( !")
        return
      }
      else{
        alert("Calling " + serviceName + " (" + serviceNumber + ")")
        coinCount.innerText = coinsNow - 20
      }

      // Add History with Time
      var timeNow = new Date()
      var li = document.createElement("li")
      li.className = "history-item"
      li.innerHTML = "<span class='history-name'>" + serviceName + "</span>" +
                     "<span class='history-number'>" + serviceNumber + "</span>" +
                     "<span class='history-time'>" + timeNow.toLocaleTimeString() + "</span>"
      historyList.prepend(li)
    })
  }

  // Copy Button
  var copyBtns = document.querySelectorAll(".card-copy")
  for(var k=0;k<copyBtns.length;k++){
    copyBtns[k].addEventListener("click", function(ev){
      var card = ev.target.closest(".hotline-card")
      var serviceNumber = card.querySelector(".card-number").innerText

      navigator.clipboard.writeText(serviceNumber).then(function(){
        alert("copied!!")
        copyCount = copyCount + 1
        if(copyCountSpan){
          copyCountSpan.innerText = copyCount
        }
      })
    })
  }

  // Clear History
  clearHistoryBtn.addEventListener("click", function(){
    historyList.innerHTML = ""   
  })

})
