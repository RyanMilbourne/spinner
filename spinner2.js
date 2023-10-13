const frames = "|/-\\|/-\\|";
let position = 0;

const spinner = function(frames) {
  if (position < frames.length) {
    process.stdout.write(`\r${frames[position]}  `);
    position++;
    setTimeout(() => spinner(frames, position), 300);
  }
};

spinner(frames);