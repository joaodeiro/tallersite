import React from 'react';

interface Client {
  name: string;
  logo: string;
  type: 'Visionários' | 'Disruptores' | 'Pioneiros' | 'Inovadores';
}

const clients: Client[] = [
  {
    name: 'Ebanx',
    logo: 'images/clientlogo-ebanx.webp',
    type: 'Disruptores'
  },
  {
    name: 'Motrix',
    logo: 'images/clientlogo-motrix.svg',
    type: 'Visionários'
  },
  {
    name: 'Natura',
    logo: 'images/clientlogo-natura.png',
    type: 'Pioneiros'
  },
  {
    name: 'Iguatemi',
    logo: 'images/clientlogo-iguatemi.png',
    type: 'Inovadores'
  },
  {
    name: 'Intelbras',
    logo: 'images/clientlogo-intelbras.png',
    type: 'Pioneiros'
  },
  {
    name: 'Unicef',
    logo: 'images/unicef.svg',
    type: 'Visionários'
  },
  {
    name: 'NSC TV',
    logo: 'images/clientlogo-nsctv.png',
    type: 'Inovadores'
  },
  {
    name: 'AMICCI',
    logo: 'images/clientlogo-amicci.png',
    type: 'Inovadores'
  },
  {
    name: 'ISTOE',
    logo: 'images/clientlogo-istoe.png',
    type: 'Visionários'
  },
  {
    name: 'RD Station',
    logo: 'images/clientlogo-rdstation.webp',
    type: 'Disruptores'
  },
  {
    name: 'Stefanini',
    logo: 'images/clientlogo-stefanini.png',
    type: 'Pioneiros'
  }
];

const ClientLogos = () => {
  return (
    <div className="mt-20">
      <p className="text-sm text-muted-foreground text-center mb-6">
        Empresas que ousaram confiar na revolução
      </p>
      
      {/* Company types */}
      <div className="flex justify-center gap-8 md:gap-16 mb-12">
        {['Visionários', 'Disruptores', 'Pioneiros', 'Inovadores'].map((tipo) => (
          <span
            key={tipo}
            className="text-lg font-medium text-gray-200 transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#DB2237] hover:to-[#F47F44]"
          >
            {tipo}
          </span>
        ))}
      </div>

      {/* Logo carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 items-center py-4">
          <div className="flex gap-6 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-48 h-16 bg-[#121212] rounded-xl flex items-center justify-center p-2 hover:bg-gradient-to-b hover:from-[#DB2337] hover:to-[#F48045] transition-all group"
              >
                {client.logo.endsWith('.svg') ? (
                  <img 
                    src={client.logo} 
                    alt={`Logo ${client.name}`}
                    className={`w-auto h-auto object-contain brightness-0 invert opacity-100 ${client.name === 'Unicef' ? '' : 'group-hover:[filter:brightness(1)_invert(0)_drop-shadow(0_0_8px_rgba(219,35,55,0.5))] group-hover:[mask-image:linear-gradient(to_bottom,#DB2337,#F48045)]'} group-hover:opacity-100 transition-all ${client.name === 'Intelbras' ? 'max-w-[180px] max-h-[55px]' : ['AMICCI'].includes(client.name) ? 'max-w-[160px] max-h-[50px]' : ['Iguatemi', 'RD Station', 'Stefanini', 'Ebanx', 'Natura'].includes(client.name) ? 'max-w-[140px] max-h-[45px]' : 'max-w-[120px] max-h-[40px]'}`}
                  />
                ) : client.logo.endsWith('.webp') ? (
                  <picture>
                    <source srcSet={client.logo} type="image/webp" />
                    <img 
                      src={client.logo.replace('.webp', '.png')} 
                      alt={`Logo ${client.name}`}
                      className={`w-auto h-auto object-contain brightness-0 invert opacity-100 ${client.name === 'Unicef' ? '' : 'group-hover:[filter:brightness(1)_invert(0)_drop-shadow(0_0_8px_rgba(219,35,55,0.5))] group-hover:[mask-image:linear-gradient(to_bottom,#DB2337,#F48045)]'} group-hover:opacity-100 transition-all ${client.name === 'Intelbras' ? 'max-w-[180px] max-h-[55px]' : ['AMICCI'].includes(client.name) ? 'max-w-[160px] max-h-[50px]' : ['Iguatemi', 'RD Station', 'Stefanini', 'Ebanx', 'Natura'].includes(client.name) ? 'max-w-[140px] max-h-[45px]' : 'max-w-[120px] max-h-[40px]'}`}
                    />
                  </picture>
                ) : (
                  <img 
                    src={client.logo} 
                    alt={`Logo ${client.name}`}
                    className={`w-auto h-auto object-contain brightness-0 invert opacity-100 ${client.name === 'Unicef' ? '' : 'group-hover:[filter:brightness(1)_invert(0)_drop-shadow(0_0_8px_rgba(219,35,55,0.5))] group-hover:[mask-image:linear-gradient(to_bottom,#DB2337,#F48045)]'} group-hover:opacity-100 transition-all ${client.name === 'Intelbras' ? 'max-w-[180px] max-h-[55px]' : ['AMICCI'].includes(client.name) ? 'max-w-[160px] max-h-[50px]' : ['Iguatemi', 'RD Station', 'Stefanini', 'Ebanx', 'Natura'].includes(client.name) ? 'max-w-[140px] max-h-[45px]' : 'max-w-[120px] max-h-[40px]'}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogos; 