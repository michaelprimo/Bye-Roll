let die_roll = 1;
let die_roll_message = ["normal","No extra rules for now...","...but if you die you might change them."];
let die_rolls = [];
let die_roll_available = [true,true,true,true,true,true];
let result = 0;

function set_rolls()
{
    die_rolls.length = 0;
    for(let i = 0; i<die_roll_available.length; i++)
    {
        if(die_roll_available[i] == true)
        {
            die_rolls.push(i+1);
        }
    }
    if(die_rolls.length == 0)
    {
        die_rolls.push(1);
    }
}

function on_a_roll()
{
    result = Math.floor(Math.random() * die_rolls.length);
    die_roll = die_rolls[result];
    switch(die_roll)
    {
        case 1:
            die_roll_message[0] = "normal";
            die_roll_message[1] = "No extra rules for now...";
            die_roll_message[2] = "...but if you die you might change them.";
            break;
        case 2:
            die_roll_message[0] = "mirrored";
            die_roll_message[1] = "The whole world is specular.";
            die_roll_message[2] = "The level itself is flipped.";
            break;
        case 3:
            die_roll_message[0] = "scrambled";
            die_roll_message[1] = "You will see random blocks.";
            die_roll_message[2] = "Many new blocks might appear.";
            break;
        case 4:
            die_roll_message[0] = "easier";
            die_roll_message[1] = "You will see less spikes.";
            die_roll_message[2] = "Only the important ones.";
            break;
        case 5:
            die_roll_message[0] = "deceptive";
            die_roll_message[1] = "Watch out of 1s, spikes and stars.";
            die_roll_message[2] = "1s can let you pass through them.";
            break;
        case 6:
            die_roll_message[0] = "creative";
            die_roll_message[1] = "Every time you land you change the block.";
            die_roll_message[2] = "Try to not confuse yourself too much...";
            break;
    }
    
}

