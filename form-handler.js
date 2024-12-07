document.getElementById("userForm").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form from reloading the page

    // Get form data
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const city = document.getElementById("city").value;
    const description = document.getElementById("description").value;

    // Generate a unique key
    const userKey = userForm.push().key;

    // User data to save
    const userData = {
        fullName: fullName,
        email: email,
        city: city,
        description: description,
        id: userKey
    };

    // Push data to Firebase
    userForm.child(userKey).set(userData, (error) => {
        if (error) {
            console.error("Error saving data: ", error);
            alert("Data could not be saved. Check the console for errors.");
        } else {
            console.log("Data saved successfully:", userData);
            alert("Data saved successfully!");
        }
    });

    // Reset the form
    document.getElementById("userForm").reset();
});
