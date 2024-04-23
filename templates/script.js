document.getElementById('imageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', document.getElementById('imageInput').files[0]);

    fetch('/detect', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = data.result;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
