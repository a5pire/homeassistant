#!usr/bin/env python3
from datetime import date, timedelta


def collection_type():
    """ Determine the bins to be emptied on the calculated day. """

    today = date.today()
    if today.weekday() > 3:  # if this thursday has passed, we only care about next week

        today = today + timedelta((0 - today.weekday()) % 7)

    # get the iso week number (1-52~53)
    week_number = today.isocalendar()[1]

    if (week_number % 2) == 0:
        # even weeks(2 & 4) are for garden waste (light green lid bin)
        bin_type = 'Garden waste'
    else:
        # odd weeks(1 & 3) are for recycling (yellow lid bin)
        bin_type = 'Recycling'

    print(f'Landfill & {bin_type}')


if __name__ == '__main__':
    collection_type()
