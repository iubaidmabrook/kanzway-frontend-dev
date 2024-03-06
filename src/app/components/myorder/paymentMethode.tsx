import { TOrderDetail } from '@/types/order.type';
import { useI18n } from '@/locales/client';
import { format } from 'date-fns';
import Image from 'next/image';
import { useState } from 'react';

function PaymentMethode({ order }: { order: TOrderDetail }) {
  const t = useI18n();
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const PAYMENT_INSTRUCTION = [
    {
      name: 'ATM Mandiri',
      step: [
        'Masukkan Kartu ATM Mandiri & PIN',
        'Pilih menu Transaksi Lainnya > Transfer > ke Rekening Mandiri Virtual Account',
        'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Perus/Produk dan Total Tagihan',
        'Masukkan Jumlah Transfer sesuai dengan Total Tagihan',
        'Ikuti instruksi untuk menyelesaikan transaksi',
        'Simpan struk transaksi sebagai bukti pembayaran',
      ],
    },
    {
      name: 'm-Mandiri (Mandiri mobile)',
      step: [
        'Masukkan Kartu ATM Mandiri & PIN',
        'Pilih menu Transaksi Lainnya > Transfer > ke Rekening Mandiri Virtual Account',
        'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Perus/Produk dan Total Tagihan',
        'Masukkan Jumlah Transfer sesuai dengan Total Tagihan',
        'Ikuti instruksi untuk menyelesaikan transaksi',
        'Simpan struk transaksi sebagai bukti pembayaran',
      ],
    },
    {
      name: 'Internet Banking Mandiri',
      step: [
        'Masukkan Kartu ATM Mandiri & PIN',
        'Pilih menu Transaksi Lainnya > Transfer > ke Rekening Mandiri Virtual Account',
        'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Perus/Produk dan Total Tagihan',
        'Masukkan Jumlah Transfer sesuai dengan Total Tagihan',
        'Ikuti instruksi untuk menyelesaikan transaksi',
        'Simpan struk transaksi sebagai bukti pembayaran',
      ],
    },
    {
      name: 'Kantor Bank Mandiri',
      step: [
        'Masukkan Kartu ATM Mandiri & PIN',
        'Pilih menu Transaksi Lainnya > Transfer > ke Rekening Mandiri Virtual Account',
        'Di halaman konfirmasi, pastikan detil pembayaran sudah sesuai seperti No VA, Nama, Perus/Produk dan Total Tagihan',
        'Masukkan Jumlah Transfer sesuai dengan Total Tagihan',
        'Ikuti instruksi untuk menyelesaikan transaksi',
        'Simpan struk transaksi sebagai bukti pembayaran',
      ],
    },
  ];

  const selectInstruction = (index: number) => {
    if (selectedIndex === index) {
      setSelectedIndex(-1);
    } else {
      setSelectedIndex(index);
    }
  };

  const renderPaymentInstruction = () => {
    return PAYMENT_INSTRUCTION.map((items, index) => (
      <div className="box-border bg-white rounded-2 px-3 py-2 mb-3">
        <span
          className={`${selectedIndex === index ? '' : 'collapsed'} link-collapse`}
          style={{ cursor: 'pointer' }}
          data-bs-toggle="collapse"
          role="presentation"
          onClick={() => selectInstruction(index)}
        >
          {items.name}
        </span>
        <div
          className={`${selectedIndex === index ? 'show' : ''} collapse`}
          id="link-collapse-4"
        >
          <div className="pt-3">
            <ul className="instruction">
              {items.step.map((steps) => (
                <li>{steps}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="box-border rounded-2 bg-white p-3">
      <div className="text-xs mb-1">{t('profile.makePayment')}</div>
      <div className="text-xs color-orange text-italic text-bold">
        {format(new Date(order.payment_expired_at), 'EEEE, dd MMMM yyyy HH:mm')}
      </div>
      <hr />
      <div className="mb-3">
        <div className="text-xs mb-2">Payment Method</div>
        <div className="d-flex gap-2 align-items-center">
          <div className="logo-bank">
            <Image
              src="https://picsum.photos/55/16"
              className="img-fluid"
              width={55}
              height={16}
              alt=""
            />
          </div>
          <div className="text-xs color-dark">{order.paymentMethod.name}</div>
        </div>
      </div>
      <div className="mb-3">
        <div className="text-xs mb-2">{t('profile.vcNumber')}</div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-xs color-dark text-bold">-</div>
          <span
            className="text-xs color-red"
            style={{ cursor: 'pointer' }}
          >
            {t('common.copy')}
          </span>
        </div>
      </div>

      <div className="mb-3">
        <div className="text-xs mb-2">{t('profile.totalPayment')}</div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-xs color-dark text-bold">{`${t('common.sar')} ${order.grandTotal}`}</div>
          <span
            className="text-xs color-red"
            style={{ cursor: 'pointer' }}
          >
            {t('common.copy')}
          </span>
        </div>
      </div>
      <hr />

      <div className="text-xs color-dark text-bold mb-3">
        Payment Instructions
      </div>
      {renderPaymentInstruction()}
    </div>
  );
}

export default PaymentMethode;
