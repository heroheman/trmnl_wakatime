function transform(input) {
  return {
    data: input.data.map(day => ({
      grand_total: {
        decimal: day.grand_total.decimal,
        total_seconds: day.grand_total.total_seconds
      },
      range: {
        date: day.range.date
      }
    }))
  };
}