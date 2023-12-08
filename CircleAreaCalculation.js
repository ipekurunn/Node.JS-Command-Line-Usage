const yaricap = process.argv[2];

if(!radius || isNaN(radius)) {
  console.error('Please enter a valid radius value');
  process.exit(1);
}

const area = Math.PI * Math pow(radius, 2);

console.log(`Area of the circle with radius ${radius}: ${area}`);
