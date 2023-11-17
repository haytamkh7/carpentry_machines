document.addEventListener('DOMContentLoaded', function() {
    const machines = [
        { 
            name: "Machine 1", 
            price: "", 
            images: ["img/Kontakt 1.jpeg", "img/Kontakt 2.jpeg"] 
        },
        { 
            name: "Machine 2", 
            price: "", 
            images: ["img/Ta5ani1.jpeg", "img/Ta5ani2.jpeg", "img/Ta5ani3.jpeg", "img/Ta5ani4.jpeg", "img/Ta5ani5.jpeg"]
        },
        { 
            name: "Machine 3", 
            price: "", 
            images: ["img/freza11.jpeg", "img/freza12.jpeg", "img/freza13.jpeg", "img/freza14.jpeg", "img/freza15.jpeg"]
        },
        { 
            name: "Machine 4", 
            price: "", 
            images: ["img/freza21.jpeg", "img/freza22.jpeg", "img/freza23.jpeg", "img/freza24.jpeg", "img/freza25.jpeg"]
        },
        { 
            name: "Machine 5", 
            price: "", 
            images: ["img/freza31.jpeg", "img/freza32.jpeg", "img/freza33.jpeg"]
        },
        { 
            name: "Machine 6", 
            price: "", 
            images: ["img/freza41.jpeg", "img/freza42.jpeg", "img/freza43.jpeg"]
        },
        { 
            name: "Machine 7", 
            price: "", 
            images: ["img/freza51.jpeg", "img/freza52.jpeg", "img/freza53.jpeg", "img/freza54.jpeg", "img/freza55.jpeg"]
        },
        { 
            name: "Machine 8", 
            price: "", 
            images: ["img/rabookh1.jpeg", "img/rabookh2.jpeg", "img/rabookh3.jpeg"]
        },
        { 
            name: "Machine 9", 
            price: "", 
            images: ["img/monshara1.jpeg", "img/monshara2.jpeg", "img/monshara3.jpeg", "img/monshara4.jpeg", "img/monshara5.jpeg"]
        },
    ];

    const gallery = document.getElementById('gallery');
    machines.forEach((machine, index) => {
        const machineItem = document.createElement('div');
        machineItem.className = 'machine-item';

        const title = document.createElement('h3');
        title.textContent = machine.name;

        const imageContainer = document.createElement('div');
        imageContainer.className = 'machine-images';
        machine.images.forEach(image => {
            const img = document.createElement('img');
            img.src = image;
            img.alt = `${machine.name} Image`;
            imageContainer.appendChild(img);
        });

        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = `Price: ${machine.price}`;

        machineItem.appendChild(title);
        machineItem.appendChild(imageContainer);
        machineItem.appendChild(price);
        gallery.appendChild(machineItem);

        if (index < machines.length - 1) {
            const separator = document.createElement('div');
            separator.className = 'separator';
            gallery.appendChild(separator);
        }
    });
});
