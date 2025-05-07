document.getElementById("generatePDF").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    let client = document.getElementById("client").value;
    let projet = document.getElementById("projet").value;
    let montant = document.getElementById("montant").value;

    doc.text(`Devis pour: ${client}`, 10, 20);
    doc.text(`Projet: ${projet}`, 10, 30);
    doc.text(`Montant: ${montant} €`, 10, 40);
    
    doc.save("Devis_Buildfinity.pdf");
});