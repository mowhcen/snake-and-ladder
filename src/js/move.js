"use strick";

const sampleMove = () => {
    $("#blue").appendTo("#cel-1");
    $("#blue").addClass("end-point");
    $("#yellow").appendTo("#cel-1");
    $("#yellow").addClass("end-point");
    $("#green").appendTo("#cel-1");
    $("#green").addClass("end-point");
    $("#red").appendTo("#cel-1");
    $("#red").addClass("end-point");
};

export { sampleMove as default };
