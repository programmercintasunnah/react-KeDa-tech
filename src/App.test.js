import {
  cetakAngka,
  palindrom,
  urutDariTerbesar,
  urutDariTerkecil,
} from "./App";

describe("cetakAngka", () => {
  test("cetakAngka dengan angka 1, seharusnya tidak mencetak apa-apa", () => {
    const consoleSpy = jest.spyOn(console, "log");
    cetakAngka(1);
    expect(consoleSpy).not.toHaveBeenCalled();
  });
  test('cetakAngka dengan angka 3, seharusnya mencetak "fish"', () => {
    const consoleSpy = jest.spyOn(console, "log");
    cetakAngka(3);
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "fish");
  });
  test("cetak angka sampai 5 yang benar", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    cetakAngka(5);
    expect(spy).toHaveBeenNthCalledWith(1, "fish");
    expect(spy).toHaveBeenNthCalledWith(2, "bash");
    spy.mockRestore();
  });
  test("cetak angka sampai 15 yang benar", () => {
    const spy = jest.spyOn(console, "log").mockImplementation();
    cetakAngka(15);
    expect(spy).toHaveBeenNthCalledWith(1, "fish");
    expect(spy).toHaveBeenNthCalledWith(2, "bash");
    expect(spy).toHaveBeenNthCalledWith(3, "fish");
    expect(spy).toHaveBeenNthCalledWith(4, "fish");
    expect(spy).toHaveBeenNthCalledWith(5, "bash");
    expect(spy).toHaveBeenNthCalledWith(6, "fish");
    expect(spy).toHaveBeenNthCalledWith(7, "fish bash");
    spy.mockRestore();
  });
});

describe("urutDariTerkecil", () => {
  test("mengurutkan array [11, 3, 9] secara ascending, seharusnya menghasilkan [3, 9, 11]", () => {
    const input = [11, 3, 9];
    const expectedOutput = [3, 9, 11];
    const output = urutDariTerkecil(input);
    expect(output).toEqual(expectedOutput);
  });
});

describe("urutDariTerbesar", () => {
  test("mengurutkan array [22, 3, 1998, 2001] secara descending, seharusnya menghasilkan [2001, 1998, 22, 3]", () => {
    const input = [22, 3, 1998, 2001];
    const expectedOutput = [2001, 1998, 22, 3];
    const output = urutDariTerbesar(input);
    expect(output).toEqual(expectedOutput);
  });
});

describe("palindrom", () => {
  test("cek jika kata yang dimasukkan adalah kata palindrom", () => {
    const result = palindrom("katak");
    expect(result).toBe(true);
  });
  test("cek jika kata yang dimasukkan bukan merupakan kata palindrom", () => {
    const result = palindrom("chelsea");
    expect(result).toBe(false);
  });
});
