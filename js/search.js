function search(event) {
    event.preventDefault(); // Prevent default form submission behavior
    var popularProperties = ["balete", "anilao", "lian", "lumbang", "matamis"]; // List of popular properties
    var searchInput = document.getElementById("searchInput").value.trim(); // Get input value
    
    // Check if the input matches any popular property (case-insensitive)
    var found = popularProperties.find(function(property) {
        return property.toLowerCase() === searchInput.toLowerCase();
    });
    
    // If a matching property is found, redirect to its page
    if (found) {
        window.location.href = "property-detail-" + found.toLowerCase() + ".html";
    } else {
        // No matching property found
        alert("No matching property found.");
    }
}