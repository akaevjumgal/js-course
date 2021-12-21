min = (Math.random() * 60);

document.write('min = ' + min);

if (min <= 15)
{
    document.write('<br>' + 'Answer - first quarter');
}
else if (min <= 30)
{
    document.write('<br>' + 'Answer - second quarter');
}
else if (min <= 45)
{
    document.write('<br>' + 'Answer - third quarter');
}
else if (min <= 60)
{
    document.write('<br>' + 'Answer - fourth quarter ');
}