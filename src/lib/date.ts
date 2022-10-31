import moment from 'moment';

function getDateDifference(targetYear: string) {
  return moment().diff(targetYear, 'years', false);
}

export { getDateDifference };
