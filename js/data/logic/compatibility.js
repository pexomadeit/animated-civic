export function checkWheelFit(car, wheel) {
  if (car.boltPattern !== wheel.boltPattern) {
    return "❌ Bolt pattern mismatch";
  }
  return "✅ Direct fit";
}
