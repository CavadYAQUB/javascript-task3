function computeLoan() {
    const amount = document.getElementById("amount").value;
    const Rate = document.getElementById("Rate").value;
    const months = document.getElementById("months").value;

    const interest = (amount * (Rate * 0.01)) / months;
    const payment = (amount / months + interest).toFixed(2);
    const output = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("payment").innerText = `Monthly Payment = $${output}`;
  }