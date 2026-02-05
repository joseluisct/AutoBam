// Para byte[] pequeños/medianos (se pasan como Base64 desde C#)
window.downloadFromBase64 = (fileName, contentType, base64Data) => {
    const link = document.createElement('a');
    link.href = `data:${contentType};base64,${base64Data}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// Para archivos grandes (se pasan como Uint8Array desde C#)
window.downloadFromBlob = (fileName, contentType, uint8Array) => {
    const blob = new Blob([uint8Array], { type: contentType });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
};