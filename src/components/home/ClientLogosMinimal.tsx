import React from 'react';

interface Client {
  name: string;
  logo: string;
  type: 'Visionários' | 'Disruptores' | 'Pioneiros' | 'Inovadores';
}

const clients: Client[] = [
  {
    name: 'AMICCI',
    logo: '/images/clientlogo-amicci.png',
    type: 'Inovadores'
  },
  {
    name: 'Aposta 10',
    logo: '/images/clientlogo-aposta10.svg',
    type: 'Inovadores'
  },
  {
    name: 'Ebanx',
    logo: '/images/clientlogo-ebanx.webp',
    type: 'Disruptores'
  },
  {
    name: 'RD Station',
    logo: '/images/clientlogo-rdstation.webp',
    type: 'Disruptores'
  },
  {
    name: 'Natura',
    logo: '/images/clientlogo-natura.png',
    type: 'Pioneiros'
  },
  {
    name: 'Coca-Cola',
    logo: '/images/clientlogo-cocacola.svg',
    type: 'Pioneiros'
  },
  {
    name: 'Unicef',
    logo: '/images/unicef.svg',
    type: 'Visionários'
  },
  {
    name: 'Motrix',
    logo: '/images/clientlogo-motrix.svg',
    type: 'Visionários'
  },
];

const ClientLogosMinimal = () => {
  return (
    <div>
      {/* Logo carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-6 items-center py-4">
          <div className="flex gap-6 animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-48 h-16 rounded-xl flex items-center justify-center p-8 hover:bg-gradient-to-b hover:from-[#DB2337] hover:to-[#F48045] transition-all group"
              >
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className={`w-auto h-auto object-contain`}
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogosMinimal; 