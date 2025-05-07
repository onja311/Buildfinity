document.getElementById("generatePDF").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    let client = document.getElementById("client").value;
    let projet = document.getElementById("projet").value;
    let materiaux = parseFloat(document.getElementById("materiaux").value) || 0;
    let mainOeuvre = parseFloat(document.getElementById("mainOeuvre").value) || 0;
    let autres = parseFloat(document.getElementById("autres").value) || 0;
    let total = materiaux + mainOeuvre + autres;

    doc.text(`Devis pour: ${client}`, 10, 20);
    doc.text(`Projet: ${projet}`, 10, 30);
    doc.text(`Matériaux: ${materiaux} €`, 10, 40);
    doc.text(`Main d’œuvre: ${mainOeuvre} €`, 10, 50);
    doc.text(`Autres coûts: ${autres} €`, 10, 60);
    doc.text(`Total: ${total} €`, 10, 70);
    
    doc.save(`Devis_${client}.pdf`);
});