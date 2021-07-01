let whiteBoxes = document.querySelectorAll(".whiteBox");
let imgBox = document.getElementsByClassName('imgBox')[0];

// Event listener on draggable element imgBox
imgBox.addEventListener('dragstart', (e)=>{
    console.log("dragstart has been triggered");
    setTimeout(() => {
        e.target.className = 'hide'
    }, 0);
})

imgBox.addEventListener('dragend', (e)=>{
    console.log("dragend has been triggered");
    e.target.className = 'imgBox';
})

// Event listener on whiteBox
for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover', (e)=>{
    console.log("dragover has been triggered");
        e.preventDefault();
    })

    whiteBox.addEventListener('dragenter', (e)=>{
        console.log("dragenter has been triggered");
        e.target.className += ' dashedBorder'
    })

    whiteBox.addEventListener('dragleave', (e)=>{
        console.log("dragleave has been triggered");
        e.target.className = 'whiteBox'
    })

    whiteBox.addEventListener('drop', (e)=>{
        console.log("drop has been triggered");
        e.target.append(imgBox);
        e.target.className = 'whiteBox'
    })
}