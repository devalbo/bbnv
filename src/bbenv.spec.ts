import { getNetworkTypeForWindowLocation } from "./index";

test('hostname with dev in string return testnet', () => {
  const hostnameProvider = () => {
    return "dev";
  }

  const net = getNetworkTypeForWindowLocation(hostnameProvider);

  expect(net).toBe("testnet");
});

test('hostname with demo in string return testnet', () => {
  const hostnameProvider = () => {
    return "demo";
  }

  const net = getNetworkTypeForWindowLocation(hostnameProvider);

  expect(net).toBe("testnet");
});

test('hostname with localhost in string return testnet', () => {
  const hostnameProvider = () => {
    return "localhost";
  }

  const net = getNetworkTypeForWindowLocation(hostnameProvider);

  expect(net).toBe("testnet");
});

test('hostname without dev/demo/localhost in string return mainnet', () => {
  const hostnameProvider = () => {
    return "validhost";
  }

  const net = getNetworkTypeForWindowLocation(hostnameProvider);

  expect(net).toBe("mainnet");
});