// Customer interface / data

while (true) {
    let answer = prompt ("Hello, would you like a customized alerts?").toLowerCase();
    if (answer === "yes") {
        let customerName = prompt ("Amazing! Please enter your name")
        let customerEmail = prompt ("And your email")

        let customerInterests = [];

        for (let i = 0; i < 3; i++){
            let customerInterest = prompt("Almost done, what are you into? (we'll take three topics, one at a time)");
            customerInterests.push(customerInterest);
        }
        alert(`You've got great taste ${customerName} ;) We'll be sure to email you at ${customerEmail} if we have new or discounted merch with the topics ${customerInterests.join(`, `)}. Happy shopping!`);
        break;
    }
    else if (answer === "no") {
        alert("Okay, enjoy our fun and freaky merch!");
        break;
    }
    else {
        alert("please enter yes or no");
    }
}


// Product info


  // let customerInterest1 = prompt ("Almost done, what are you into? (we'll take three topics, one at a time)");
        // let customerInterest2 = prompt ("Us too! What's another thing you're interested in?");
        // let customerInterest3 = prompt ("Last one, what are you into?");

        // alert(`You've got great taste ${customerName} ;) We'll be sure to email you at ${customerEmail} if we have new or discounted merch with the topics ${customerInterest1}, ${customerInterest2}, or ${customerInterest3}. Happy shopping!`);
