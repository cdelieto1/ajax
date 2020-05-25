"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    $('#fortune-text').html(response);

  });
});

// Part 2

$('#weather-form').on('submit', (event) => {
  event.preventDefault();

  const formData = {
    zipcode: $('#zipcode-field').val()
  };

  $.get('/weather', formData, (response) => {
    $('#weather-info').html(response.forecast);
  });
});

// Part 3

$("#order-form").on('submit', (event) => {
  event.preventDefault();

  const formData = {
    melon_type: $('#melon-type-field').val(),
    qty: $('#qty-field').val()
  };

  $.post('/order-melons', formData, (response) => {
    const orderStatus = $('#order-status');

    if (results.code === 'ERROR') {
      orderStatus.css('color', 'red');
    } else {
      orderStatus.css('color', ''); 
    }

    orderStatus.html(`<p>${response.msg}</p>`);
  });
});
