# Simple-API

### CUIDADO!
## Esta versao do código utiliza a biblioteca Axios. Utilize com cuidado.

## Front End
<img width="1915" height="912" alt="image" src="https://github.com/user-attachments/assets/eb241b3f-cf7a-438d-8b38-45c2df464fe9" />

<img width="1589" height="858" alt="image" src="https://github.com/user-attachments/assets/80a4524e-0e5e-4dc6-b27c-72a12f0b8a24" />

<img width="1104" height="694" alt="image" src="https://github.com/user-attachments/assets/27ac8eab-be52-455c-9401-b1882700cbf5" />

## API

### Lista de Endpoints GET e POST simples:

```java
    @PostMapping
    public Instrument create(@RequestBody InstrumentDTO dto) {
        return service.create(dto);
    }

    @GetMapping
    public List<Instrument> getAll() {
        return service.getAll();
    }


```
### GET:
Método - URL - Body - 

<img width="681" height="854" alt="image" src="https://github.com/user-attachments/assets/a283a264-3e28-4ba7-9651-eaffda2adfe6" />

Resposta:

<img width="679" height="536" alt="image" src="https://github.com/user-attachments/assets/cdecf97e-67fd-4fca-b3f3-f013397b0d7c" />

### POST:

Método - URL - Body - 

<img width="685" height="858" alt="image" src="https://github.com/user-attachments/assets/88c1fe75-85b6-434b-ab29-61bd12e9ee89" />

Requisição:

<img width="678" height="437" alt="image" src="https://github.com/user-attachments/assets/a2656453-ceaa-421b-8ff9-1118c0dba81f" />

Resposta:

<img width="676" height="414" alt="image" src="https://github.com/user-attachments/assets/53f405dc-92a6-41f3-8234-8196a51eec2a" />

### Retornos via Console.log
<img width="1910" height="434" alt="image" src="https://github.com/user-attachments/assets/5cbfd795-88ea-49ba-8aeb-7d3bf52fc2ac" />

### Criação de 5 instrumentos via POST:

<img width="1914" height="154" alt="image" src="https://github.com/user-attachments/assets/1f88de39-8b76-4bb5-8d84-dca1977761d0" />

# Validação:

## Regra do sistema:

```java
public enum InstrumentType {
    CORDA,
    SOPRO,
    PERCURSSAO,
    TECLADO
}
```

## Método

```java
  private InstrumentType parseType(String type) {
    try {
        return InstrumentType.valueOf(type.toUpperCase());
    } catch (Exception ex) {
        throw new ResponseStatusException(BAD_REQUEST, "Invalid instrument type: " + type);
    }
}
```
# Objetivo:
Esta validação garante que o valor(instrumento) informado estaja de acordo com a regra do sistema estabelecida, impedindo
que um objeto inválido entre no sistema

# Como funciona:

1. Recebe uma String (type) como entrada
  
2. Converte o valor para maiúsculo (toUpperCase())
  
3. Tenta mapear o valor para um enum InstrumentType usando valueOf()
  
4. Caso o valor não exista no enum:
  
    Lança uma exceção ResponseStatusException
    
    Retorna status HTTP 400 (BAD_REQUEST)
    
    Informa qual valor foi inválido


<img width="1891" height="112" alt="Put_1" src="https://github.com/user-attachments/assets/a586501e-c3a9-4509-86a8-ad1a813cd07d" />

<img width="812" height="893" alt="Put_2" src="https://github.com/user-attachments/assets/0628f4bc-72ca-4a8f-83b0-feb1178631b8" />

<img width="818" height="462" alt="Put_3" src="https://github.com/user-attachments/assets/f3d515a1-ff85-42a9-abca-97511ffa4dcb" />

<img width="817" height="890" alt="Put_4" src="https://github.com/user-attachments/assets/cf0f7855-1b60-46ec-ac1b-0d87a54e43d5" />

<img width="1918" height="281" alt="Delete_1" src="https://github.com/user-attachments/assets/58321369-7080-47eb-afee-b456470892ce" />

<img width="817" height="882" alt="Delete_2" src="https://github.com/user-attachments/assets/91686da8-3ab6-4590-8de9-bcc5b735b986" />

<img width="825" height="836" alt="Delete_3" src="https://github.com/user-attachments/assets/5d7f826e-f979-4aea-ad2a-7fa063905dbb" />
