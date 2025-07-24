function calculateAreaOfRect(length, width) {
    if(length <= 0) {
        throw new RangeError("Length should be a positive number");
    } 

    if(width <= 0) {
        throw new RangeError("Width should be a positive number");
    } 

    const area = length * width;
    console.log("Area of a rectangle is", area);
}

calculateAreaOfRect(20, 30);
// calculateAreaOfRect(-2, 30);
//calculateArea(5, -30);
//calculateArea(5, 0);