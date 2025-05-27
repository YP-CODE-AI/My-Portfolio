function getPrediction() {
    const question =
    document.getElementById("question").value;
    if (!question.trim()) {
        alert("Please enter the question first!");
        return;
    }
    
    //Possible answers
    const answers = [
        "Yes", "No", "Absolutely", "Maybe", "Most likely", "Don't count on it", "Bad idea", "Ask again later", "Very doubtful", "Signs point to yes"];
        const randomIndex = Math.floor(Math.random() * answers.length);
        const answer = answers[randomIndex];

        //Update display
        document.getElementById("prediction").innerHTML = answer;
        document.getElementsById("ball").src = "https://lh6.googleusercontent.com/iqmR9UclWPm99p1RpPRxKhJbs6bb4jJl8q66d1cFwuBXNDGhkJB0__x9RrFpQv0WB6B6HrzQhcd7WWMa7YJvW5N5TzQco8l8TCPEfYIf69257Zd71uZ0h7vBgcCJUvcItA=w1280";

        //Reset after 3 seconds
        setTimeout(() => {
            document.getElementById("prediction").innerHTML = "";
            document.getElementById("ball").src = "https://lh6.googleusercontent.com/iqmR9UclWPm99p1RpPRxKhJbs6bb4jJl8q66d1cFwuBXNDGhkJB0__x9RrFpQv0WB6B6HrzQhcd7WWMa7YJvW5N5TzQco8l8TCPEfYIf69257Zd71uZ0h7vBgcCJUvcItA=w1280";
        }, 3000);
}