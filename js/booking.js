/* MORRUBARBER - 3-STEP BOOKING SYSTEM LOGIC */

let selectedBooking = {
    service: '',
    price: '',
    barber: '',
    time: ''
};

function selectService(serviceName, price) {
    selectedBooking.service = serviceName;
    selectedBooking.price = price;
    goToStep(2);
}

function selectBarber(barberName) {
    selectedBooking.barber = barberName;
    alert(`Barbero seleccionado: ${barberName}`);
}

function goToStep(stepNumber) {
    document.querySelectorAll('.booking-step').forEach(step => step.style.display = 'none');
    document.getElementById(`step-${stepNumber}`).style.display = 'block';

    // Update Indicators
    for (let i = 1; i <= 3; i++) {
        const ind = document.getElementById(`step-${i}-indicator`);
        if (i === stepNumber) {
            ind.style.background = 'var(--accent-gold)';
            ind.style.color = '#000';
        } else {
            ind.style.background = 'rgba(212, 175, 55, 0.15)';
            ind.style.color = 'var(--accent-gold)';
        }
    }

    if (stepNumber === 3) {
        const timeInput = document.getElementById('booking-time').value;
        selectedBooking.time = timeInput ? new Date(timeInput).toLocaleString() : 'Fecha a definir en WhatsApp';
        document.getElementById('booking-summary').innerText = 
            `Servicio: ${selectedBooking.service} | Barbero: ${selectedBooking.barber || 'Cualquiera'} | Horario: ${selectedBooking.time}`;
    }
}

function confirmBooking(event) {
    event.preventDefault();
    alert(`¡Reserva confirmada con éxito!

Te esperamos para tu ${selectedBooking.service}. En breve recibirás un recordatorio por WhatsApp.`);
    goToStep(1);
}