const url = '/assets/data/barchart.json';
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log("success!");
    sortArrayOfObjects(data.languages, 'experience');
    setBarchart(data.languages);
    console.log(data);
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });

  function setBarchart(data) {
	// maak een verwijzing naar het canvas-element
    const canvas = document.getElementById('barchart');
	
	// maak array languages, experiences, colors aan
    const languages = data.map((element) => element.language);

const experiences = data.map((element) => element.experience);

const colors = data.map((element) => {
  if (element.experience >= 80) return '#FF2C05';
  else if (element.experience >= 60) return '#FD6104';
  else if (element.experience >= 40) return '#FD9A01';
  else if (element.experience >= 20) return '#FFCE03';
  else return '#FEF001';
});
	
	// maak de chart aan op basis van de canvas en de drie arrays
    new Chart(canvas, {
        type: 'bar',
        data: {
        labels: languages,
        datasets: [
            {
              label: 'Programming Experience (percentage)',
              data: experiences,
              backgroundColor: colors,
              borderWidth: 1,
            },
          ],
        },
      });
}