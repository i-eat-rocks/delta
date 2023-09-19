$(function () {

  // fish array because i don't like switch statements
  const fishes = [
    ['a', 'b', 'c', 'Blobfish'],
    ['d', 'e', 'f', 'Goblin Shark'],
    ['g', 'h', 'i', 'Yeti Crab'],
    ['j', 'k', 'l', 'Isopod'],
    ['m', 'n', 'o', 'Hagfish'],
    ['p', 'q', 'r', 'Deep-Sea Dragonfish'],
    ['s', 't', 'u', 'Bigfin Squid'],
    ['v', 'w', 'x', 'Barreleye'],
    ['y', 'z', 'z', 'Sarcastic Fringehead'],
  ];

  $('#goBtn').click(() => {
    // get initial
    let userInitial = $('#username').val().trim().toLowerCase()[0];

    // set user's fish to the one corresponding to their initial
    let fish = '';
    fishes.forEach((fishRow) => {
      if (fishRow.slice(0, 3).includes(userInitial)) {
        fish = fishRow[3];
      }
    });
    // if fish could not be chosen due to non-alpha character, do nothing
    if (fish) {
      $('#fishInfo').text("Your creature: " + fish + '!');
      $('#fishInfo').removeClass("hidden");
      let newsrc = './assets/' + fish + '.png'
      $('#fishImg').attr('src', newsrc);
      $('#fishImg').attr('display', 'flex');
    }
  });

});