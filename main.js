
window.onload = () => {
    addRows();
}

const loremIpsum = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Duis elit arcu, dignissim tincidunt rhoncus non, vulputate id nisl.
    Integer convallis ex quam. Nullam gravida neque a dapibus volutpat.
    Suspendisse congue in elit sed vestibulum. Nunc id pellentesque magna, vitae lobortis felis.
`;


const addRows = () => {
    const tableName = document.getElementById("table-body");

    for(let i=0; i<100; i++) {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${i+1}</td>
            <td>Value ${(i + parseInt(Math.random()*10)) % 3 == 0 ? loremIpsum : i+1}</td>
        `;

        tableName.appendChild(tr);
    }
};